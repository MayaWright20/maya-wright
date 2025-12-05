import RotatingCircle from "../rotating-circle/rotating-circle";

interface Props {
  isPageLoaded: boolean;
  onClick: () => void;
  title: String;
}

export default function PageLabel({ isPageLoaded, onClick, title }: Props) {
  return (
    <RotatingCircle
      isPageLoaded={isPageLoaded}
      onClick={onClick}
      text={`${title} ◉ ${title} ◉ `}
    />
  );
}
