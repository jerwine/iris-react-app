import React from "react";
import { connect } from "react-redux";
import { getAllIris } from "../../services/IrisService";
import PropTypes from "prop-types";

class BodyComponent extends React.Component {

	componentDidMount() {
		this.props.getAllIris();
	}

	render() {
		const { irises } = this.props.iris;
		return (
			<div>
				<main role="main">
					<div className="jumbotron">
						<div className="container">
							<h1 className="display-3">Iris database</h1>
							<p>This is the Iris flower data set.</p>
							<p><a className="btn btn-primary btn-lg" href='https://en.wikipedia.org/wiki/Iris_flower_data_set' role="button">Learn more &raquo;</a></p>
						</div>
					</div>
					<div>
						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">Id</th>
									<th scope="col">Species</th>
									<th scope="col">Sepal Length</th>
									<th scope="col">Sepal Width</th>
									<th scope="col">Petal Length</th>
									<th scope="col">Petal Width</th>
								</tr>
							</thead>
							<tbody>
								{ irises.map( iris => ( <IrisRow key={iris.id} iris={iris} /> ) ) }
							</tbody>
						</table>
					</div>
				</main>
			</div>
		);
	}
}

const IrisRow = ({iris}) => (
	<tr>
		<td>{iris.id}</td>
		<td>{iris.species}</td>
		<td>{iris.sepalLength}</td>
		<td>{iris.sepalWidth}</td>
		<td>{iris.petalLength}</td>
		<td>{iris.petalWidth}</td>
	</tr>
);

BodyComponent.propTypes = {
	iris: PropTypes.object.isRequired,
	getAllIris: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	iris: state.iris
});

export default connect(
	mapStateToProps,
	{ getAllIris })
	(BodyComponent)