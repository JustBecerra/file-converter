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
			</div>
			<div className="p-[2em] flex flex-col justify-center items-center h-[60%] w-full gap-[3em]">
				<div className="flex justify-around items-center w-[80%]">
					<select
						className="bg-white text-black p-2 rounded w-[100px] h-[60px]"
						name="original file"
					>
						<option>.epub</option>
						<option>.mobi</option>
					</select>
					<p className="text-white text-xl">TO</p>
					<select
						className="bg-white text-black p-2 rounded w-[100px] h-[60px]"
						name="new file"
					>
						<option>.mobi</option>
						<option>.epub</option>
					</select>
				</div>

				<div
					onDrop={handleDrop}
					className="bg-[#3bb5e9] cursor-pointer w-[80%] h-[70px] flex justify-center items-center rounded"
				>
					<label
						htmlFor="dropFile"
						className="text-white cursor-pointer p-4"
					>
						{droppedFile ? (
							<p>{droppedFile.name}</p>
						) : (
							<p>Drag your file or click here to upload a file</p>
						)}

						<input
							id="dropFile"
							onChange={handleFileChange}
							type="file"
							className="hidden"
						/>
					</label>
				</div>
			</div>
		</div>
	)
}

export default App
