import './selector.css';

export const Selector = () => (
  <select className="selector" name="select">
    <option value="р" selected>Родительный</option>
    <option value="д">Дательный</option>
    <option value="в">Винительный</option>
    <option value="т">Творительный</option>
    <option value="п">Предложный</option>
  </select>
);