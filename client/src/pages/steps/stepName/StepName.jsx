import Button from '../../../components/shared/button/Button';

const StepName = ({ onNext }) => {
  return (
    <div>
      StepName
      <Button text="Next" onClick={onNext} />
    </div>
  );
};
export default StepName;
