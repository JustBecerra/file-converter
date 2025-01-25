import "./App.css"

function App() {
	return (
		<div className="App">
			<div>
				<p className="apptitle">File Converter</p>
			</div>
			<div className="card">
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

				<div className="fileinput">
					<label htmlFor="dropFile" className="text-red-500">
						Drag your file here or click in this area to select a
						file
					</label>

					<input id="dropFile" type="file" />
				</div>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

export default App
