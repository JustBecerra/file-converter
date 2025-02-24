import { useState } from "react"
import "./App.css"

function App() {
	const [droppedFile, setDroppedFile] = useState<File | null>(null)

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) setDroppedFile(e.target.files[0])
	}
	return (
		<div className="flex flex-col justify-center items-center h-[70vh] w-[40vw]">
			<div>
				<p className="text-[2em] mb-[1em] text-[#3bb5e9]">
					File Converter
				</p>
				<p className="text-[1em]  text-white">
					Drag and drop or click your file and select the format you
					want to convert it to.
				</p>
			</div>
			<div className="p-[2em] flex flex-col justify-center items-center h-[60%] w-full gap-[3em]">
				{droppedFile ? (
					<div className="flex flex-col gap-6 items-center w-[80%]">
						<div className="flex w-[100%] h-[60px]">
							<div className="border-white border-1 border-solid w-[100%] h-[60px] flex justify-around items-center rounded">
								<p className="text-white w-[70%] text-xl">
									{droppedFile.name}
								</p>
								<p className="text-white w-[30%] text-xl border-l-white border-l-2 border-solid">
									{droppedFile.size} bytes
								</p>
							</div>
							<button
								onClick={() => setDroppedFile(null)}
								className="w-[50px] h-[100%] cursor-pointer border-white hover:font-bold border-solid hover:border-y-1 hover:border-r-1"
							>
								X
							</button>
						</div>

						<p className="text-white text-xl ">TO</p>

						<div className="flex justify-around items-center w-[100%]">
							<select
								className="bg-white text-black p-2 rounded w-[100px] h-[60px]"
								name="new file"
							>
								<option>.mobi</option>
								<option>.epub</option>
								<option>.jpg</option>
								<option>.png</option>
							</select>
							<button className="w-[100px] h-[60px] text-white bg-[#3bb5e9] cursor-pointer rounded">
								Convert
							</button>
						</div>
					</div>
				) : (
					<div
						onDrop={handleDrop}
						className="bg-[#3bb5e9] cursor-pointer w-[80%] h-[70px] flex justify-center items-center rounded"
					>
						<label
							htmlFor="dropFile"
							className="text-white cursor-pointer p-4"
						>
							<p>Drag your file or click here to upload a file</p>

							<input
								id="dropFile"
								onChange={handleFileChange}
								type="file"
								className="hidden"
							/>
						</label>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
