import { Styled_Container } from './styles';

interface Props {
  innerColor?: string;
  outterColor?: string;
  middleColor?: string;
  outterHeight?: string;
  onClick?: () => any;
  hoverOutterBorderWidth?: string;
}

export default function Circle({
  innerColor = 'transparent',
  middleColor = 'transparent',
  outterColor = 'transparent',
  outterHeight = '56px',
  onClick,
  hoverOutterBorderWidth = '10px',
}: Props) {
  return (
    <Styled_Container
      $inner_color={innerColor}
      $middle_color={middleColor}
      $outter_color={outterColor}
      $outter_height={outterHeight}
      $hover_outter_border_width={hoverOutterBorderWidth}
    >
      <div onClick={onClick} className="circle-container">
        <div className="circle"></div>
      </div>
    </Styled_Container>
  );
}
