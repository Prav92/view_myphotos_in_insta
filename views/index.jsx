var React = require('react');


class HelloMessage extends React.Component {
  render() {
   return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
        	<div>Hello {this.props.name}</div>;
        </body>
       </html>
    );
}

module.exports = HelloMessage;