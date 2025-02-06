import { Styled_Container } from './styles';

interface Props {
  innerColor: string;
  outterColor?: string;
  middleColor?: string;
  outterHeight: string;
  onClick?: () => any;
}

export default function Circle({
  innerColor,
  middleColor,
  outterColor,
  outterHeight,
  onClick,
}: Props) {
  return (
    <Styled_Container
      $inner_color={innerColor}
      $middle_color={middleColor}
      $outter_color={outterColor}
      $outter_height={outterHeight}
    >
      <div onClick={onClick} className="circle-container">
        <div className="circle"></div>
      </div>
    </Styled_Container>
  );
}
