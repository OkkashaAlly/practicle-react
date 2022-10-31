const InputNote = ({ note, styles }) => (
  <div className={`-mt-3 ${styles}`}>
    <span className="text-blue-500 text-sm">{note}</span>
  </div>
);

export default InputNote;
