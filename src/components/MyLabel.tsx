import './MyLabel.css';

interface MyLabelProps {
  /**
   * Text to display
   */
  label: string
  /**
   * Label size
   */
  size?: 'normal' | 'h3' | 'h2' | 'h1'
  /**
   * Capitalize all letters
   */
  allCaps?: boolean,
  /**
   * Label color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary',
  /**
   * Font color
   */
  fontColor?: string
}

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps,
  color,
  fontColor
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} ${color}`}
      style={{
        textTransform: allCaps ? 'uppercase' : 'initial',
        color: fontColor
      }}>
      {label}
    </span>
  );
};

export default MyLabel;