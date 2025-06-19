import React, { useState } from 'react';

interface FormatSelectorProps {
  onFormatSelect: (format: string) => void;
  selectedFormat: string;
}

interface FormatCategory {
  name: string;
  formats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

export const FormatSelector: React.FC<FormatSelectorProps> = ({
  onFormatSelect,
  selectedFormat
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatCategories: FormatCategory[] = [
    {
      name: 'Documents',
      formats: [
        { value: 'pdf', label: 'PDF', description: 'Portable Document Format' },
        { value: 'docx', label: 'DOCX', description: 'Microsoft Word Document' },
        { value: 'txt', label: 'TXT', description: 'Plain Text File' },
        { value: 'rtf', label: 'RTF', description: 'Rich Text Format' },
      ]
    },
    {
      name: 'Images',
      formats: [
        { value: 'jpg', label: 'JPG', description: 'JPEG Image' },
        { value: 'png', label: 'PNG', description: 'PNG Image' },
        { value: 'gif', label: 'GIF', description: 'GIF Image' },
        { value: 'webp', label: 'WebP', description: 'WebP Image' },
        { value: 'svg', label: 'SVG', description: 'Scalable Vector Graphics' },
      ]
    },
    {
      name: 'Audio',
      formats: [
        { value: 'mp3', label: 'MP3', description: 'MP3 Audio' },
        { value: 'wav', label: 'WAV', description: 'Wave Audio' },
        { value: 'flac', label: 'FLAC', description: 'Free Lossless Audio Codec' },
        { value: 'aac', label: 'AAC', description: 'Advanced Audio Coding' },
      ]
    },
    {
      name: 'Video',
      formats: [
        { value: 'mp4', label: 'MP4', description: 'MP4 Video' },
        { value: 'avi', label: 'AVI', description: 'Audio Video Interleave' },
        { value: 'mov', label: 'MOV', description: 'QuickTime Movie' },
        { value: 'webm', label: 'WebM', description: 'WebM Video' },
      ]
    },
    {
      name: 'E-books',
      formats: [
        { value: 'epub', label: 'EPUB', description: 'Electronic Publication' },
        { value: 'mobi', label: 'MOBI', description: 'Mobipocket eBook' },
        { value: 'azw3', label: 'AZW3', description: 'Amazon Kindle Format' },
      ]
    },
    {
      name: 'Archives',
      formats: [
        { value: 'zip', label: 'ZIP', description: 'ZIP Archive' },
        { value: 'rar', label: 'RAR', description: 'RAR Archive' },
        { value: '7z', label: '7Z', description: '7-Zip Archive' },
      ]
    }
  ];

  const getSelectedFormatInfo = () => {
    for (const category of formatCategories) {
      const format = category.formats.find(f => f.value === selectedFormat);
      if (format) return format;
    }
    return null;
  };

  const selectedFormatInfo = getSelectedFormatInfo();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-left shadow-sm hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Convert to
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedFormatInfo ? `${selectedFormatInfo.label} (${selectedFormatInfo.description})` : 'Select format...'}
                </p>
              </div>
            </div>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg max-h-96 overflow-y-auto">
            {formatCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {category.name}
                  </h3>
                </div>
                {category.formats.map((format, formatIndex) => (
                  <button
                    key={formatIndex}
                    onClick={() => {
                      onFormatSelect(format.value);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${selectedFormat === format.value
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-900 dark:text-white'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{format.label}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {format.description}
                        </p>
                      </div>
                      {selectedFormat === format.value && (
                        <svg
                          className="w-5 h-5 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 