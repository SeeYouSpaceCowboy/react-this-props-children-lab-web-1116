const React = require('react')

class ThemeDecorations extends React.Component {
  render() {
    const littleChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    })

    return (
      <div>
        { littleChildren }
      </div>
    )
  }
}

module.exports = ThemeDecorations
