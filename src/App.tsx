import "./App.css"

function App() {
	return (
		<div className="flex flex-col justify-center items-center h-[70vh] w-[40vw]">
			<div>
				<p className="text-[2em] mb-[1em] text-[#3bb5e9]">
					File Converter
				</p>
			</div>
			<div className="p-[2em] flex flex-col justify-center items-center h-[60%] w-full gap-[3em]">
				<div className="flex gap-[3em]">
					<select name="original file">
						<option>.epub</option>
						<option>.mobi</option>
					</select>
					<select name="new file">
						<option>.mobi</option>
						<option>.epub</option>
					</select>
				</div>

				<div className="bg-[#3bb5e9] w-1/2 h-[70px] flex justify-center items-center rounded-[4px]">
					<label htmlFor="dropFile" className="text-red-500">
						Drag your file here or click in this area to select a
						file
					</label>

					<input id="dropFile" type="file" />
				</div>
			</div>
		</div>
	)
}

export default App
