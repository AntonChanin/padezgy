// base to https://habr.com/ru/sandbox/23108/

const toCase = (str, choice) => {
  //table of rules
  const strPub = {
      'а': ['ы', 'е', 'у', 'ой', 'е'],
      '(ш/ж/к/ч)а': ['%и', '%е', '%у', '%ой', '%е'],
      'б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х': ['%а', '%у', '%а', '%ом', '%е'],
      'и/е': ['ей', 'ям', '%', 'ями', 'ях'],
      'ый': ['ого', 'ому', '%', 'ым', 'ом'],
      'й': ['я', 'ю', 'я', 'ем', 'е'],
      'о': ['а', 'у', '%', 'ом', 'е'],
      'с/ш': ['%а', '%у', '%', '%ом', '%е'],
      'ы': ['ов', 'ам', '%', 'ами', 'ах'],
      'ь': ['я', 'ю', 'я', 'ем', 'е'],
      'уль': ['ули', 'уле', 'улю', 'улей', 'уле'],
      '(ч/ш/д/т)ь': ['%и', '%и', '%ь', '%ью', '%и'],
      'я': ['и', 'е', 'ю', 'ей', 'е']
  };
  //enum of cases
  const cases = {
    'р': 0,
    'д': 1,
    'в': 2,
    'т': 3,
    'п': 4
  };
  //enum of excludeds
  const exs = {
    'ц': 2,
    'ок': 2
  };
  // common values
  let lastIndex = 0;
  let reformedStr = '';
  let forLong = 0;
  let forPseudo = 0;

  for (let rule in strPub) {
    // for afix with lenght more than 1
    if (rule.length > 1 && str.slice(-rule.length) === rule) {
      lastIndex = rule;
      reformedStr = str.slice(0, -lastIndex.length);
      break;
    } else if (/[\(\)]+/g.test(rule)) {
      //grouped afix
      rule.replace(/\(([^\(\)]+)\)([^\(\)]+)?/g, (a, b, c) => {
          b.split('/').map((splittedItem) => {
            let groupped = splittedItem + c;
            strPub[groupped] = strPub[rule];
            if (str.slice(-groupped.length) === groupped) {
              for (let eachSplitedId = 0, eachSplited = strPub[groupped]; eachSplitedId < eachSplited.length; eachSplitedId++) {
                eachSplited[eachSplitedId] = eachSplited[eachSplitedId].replace('%', splittedItem);
              }
              reformedStr = str.slice(0, -groupped.length);
              forPseudo = groupped;
            }
          })
        } 
      )
    } else {
      // default
      lastIndex = str.slice(-1);
      reformedStr = str.slice(0, -(forPseudo || lastIndex).length);
    }
    //grouped afix with slash
    if (/\//.test(rule) && !(/[\(\)]+/g.test(rule)) && new RegExp(lastIndex).test(rule)) {
      forLong = rule;
    }
    //find excludes
    for (let exclude in exs) {
      if(str.slice(-exclude.length) === exclude)reformedStr = str.slice(0, -exs[exclude]);
    }
  }

  if (strPub[(forPseudo || forLong || lastIndex)]) {
    //create afix
    const afix = strPub[(forPseudo || forLong || lastIndex)][cases[choice]];
    if (afix) {
      //modifed afix '%' -> 'lastIndex' create result = 'reformedStr' + 'modifedAfix'
      const modifedAfix = `${afix}`.replace('%', lastIndex);
      const result = reformedStr + modifedAfix;
      return result;
    }
  }
  
  //the stopper
  return 'Упс-с-с чтото пошло не так!';
};

export default toCase;