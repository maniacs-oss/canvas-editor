import CardBlock from 'canvas-editor/components/canvas-block-card/component';
import layout from './template';
import styles from './styles';

/**
 * A component representing a URL card.
 *
 * @class CanvasEditor.CanvasBlockTipComponent
 * @extends CanvasEditor.CanvasBlockCardComponent
 */
export default CardBlock.extend({
  classNames: ['canvas-block-tip'],
  layout,
  localClassNames: ['component'],
  styles,

  actions: {
    removeSelf() {
      alert("Implement me");
    }
  }
});
