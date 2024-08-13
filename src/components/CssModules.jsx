import classes from '../scss/CssModules.module.scss';
// or styles


const CssModules = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>CSS Modules</h2>

      <button className={classes.btn}>ボタン</button>
    </div>
  );
};


export default CssModules;
