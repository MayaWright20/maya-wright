import RotatingCircle from '../rotating-circle/rotating-circle';

interface Props {
  isPageLoaded: boolean;
  onClick: () => void;
}

export default function PageLabel({ isPageLoaded, onClick }: Props) {
  return (
    <RotatingCircle
      isPageLoaded={isPageLoaded}
      onClick={onClick}
      text={'Maya Wright ◉ Maya Wright ◉ '}
    />
  );
}
