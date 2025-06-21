import { useState } from "react"
import "./App.css"
import { Header } from "./components/Header"
import { FileUpload } from "./components/FileUpload"
import { FileInfo } from "./components/FileInfo"
import { FormatSelector } from "./components/FormatSelector"
import { ConvertButton } from "./components/ConvertButton"

function App() {
	const [droppedFile, setDroppedFile] = useState<File | null>(null)
	const [selectedFormat, setSelectedFormat] = useState<string>("")
	const [isConverting, setIsConverting] = useState<boolean>(false)

	const handleFileSelect = (file: File) => {
		setDroppedFile(file)
		setSelectedFormat("")
	}

	const handleFileRemove = () => {
		setDroppedFile(null)
		setSelectedFormat("")
	}

	const handleFormatSelect = (format: string) => {
		setSelectedFormat(format)
	}

	const handleConvert = () => {
		if (!droppedFile || !selectedFormat) return

		setIsConverting(true)

		// Simulate conversion process
		setTimeout(() => {
			setIsConverting(false)
			// Here you would typically handle the actual conversion
			alert(`File converted to ${selectedFormat} format!`)
			setDroppedFile(null)
			setSelectedFormat("")
		}, 3000)
	}

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
			<Header />

			<main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 w-full flex flex-col justify-center lg:justify-start">
				{/* Hero Section */}
				<div className="text-center mb-6 sm:mb-8 lg:mb-12 py-4 sm:py-6 lg:py-8">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6">
						Convert Files Instantly
					</h1>
					<p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
						Transform your files into any format you need. Fast, secure, and completely free.
						No registration required.
					</p>
				</div>

				{/* Converter Section */}
				<div className="max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12">
					<div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8">
						{!droppedFile ? (
							<div className="space-y-4 sm:space-y-6 lg:space-y-8">
								<div className="text-center">
									<h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-2 lg:mb-3">
										Upload Your File
									</h2>
									<p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400">
										Drag and drop your file here or click to browse
									</p>
								</div>
								<FileUpload onFileSelect={handleFileSelect} />
							</div>
						) : (
							<div className="space-y-4 sm:space-y-6 lg:space-y-8">
								<div className="text-center">
									<h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-2 lg:mb-3">
										Convert Your File
									</h2>
									<p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400">
										Select your desired output format and convert
									</p>
								</div>

								<FileInfo file={droppedFile} onRemove={handleFileRemove} />

								<div className="flex items-center justify-center">
									<svg
										className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-400 dark:text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 14l-7 7m0 0l-7-7m7 7V3"
										/>
									</svg>
								</div>

								<FormatSelector
									onFormatSelect={handleFormatSelect}
									selectedFormat={selectedFormat}
								/>

								<ConvertButton
									onConvert={handleConvert}
									disabled={!selectedFormat}
									isConverting={isConverting}
								/>
							</div>
						)}
					</div>
				</div>

			</main>

			{/* Footer */}
			<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4 sm:py-6 lg:py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center text-gray-600 dark:text-gray-400">
						<p className="text-xs sm:text-sm lg:text-base">&copy; 2024 FileConverter. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
