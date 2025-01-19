import "./App.css"

function App() {
	return (
		<div className="App">
			<div>
				<p className="apptitle">File Converter</p>
			</div>
			<div className="card">
				<div className="fileinput">
					<input type="file" />
				</div>

				<div className="selectcontainer">
					<select name="original file">
						<option>.epub</option>
						<option>.mobi</option>
					</select>
					<select name="new file">
						<option>.mobi</option>
						<option>.epub</option>
					</select>
				</div>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

export default App
