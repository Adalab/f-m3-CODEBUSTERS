import React from 'react';
import MainPreview from './MainPreview';
import MainForm from './MainForm';
//import { tsImportEqualsDeclaration } from '@babel/types';

class MainSections extends React.Component {
	render() {
		return (
			<main className="main-sections__container">
				<MainPreview
					data={this.props.data}
					circles={this.props.circles}
					color={this.props.color}
				/>
				<MainForm
					methodInputText={this.props.methodInputText}
					profileObject={this.props.profileObject}
					methodColorChange={this.props.methodColorChange}
					checked={this.props.checked}
					updateAvatar={this.props.updateAvatar}
					btnShare={this.props.btnShare}
				/>
			</main>
		);
	}
}

export default MainSections;
