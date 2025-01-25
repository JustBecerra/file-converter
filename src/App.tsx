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
				<div className="flex justify-around items-center w-[80%]">
					<select
						className="bg-black p-2 rounded w-[100px] h-[60px]"
						name="original file"
					>
						<option>.epub</option>
						<option>.mobi</option>
					</select>
					<p className="text-black text-xl">TO</p>
					<select
						className="bg-black p-2 rounded w-[100px] h-[60px]"
						name="new file"
					>
						<option>.mobi</option>
						<option>.epub</option>
					</select>
				</div>

				<div className="bg-[#3bb5e9] cursor-pointer w-[80%] h-[70px] flex justify-center items-center rounded">
					<label htmlFor="dropFile" className="text-white p-4">
						Drag your file or click here to upload a file
					</label>

					<input id="dropFile" type="file" className="hidden" />
				</div>
			</div>
		</div>
	)
}

export default App
