import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Page {
  id: number;
  content: string;
  image?: string;
}

interface FlipBookProps {
  pages: Page[];
  title: string;
  author: string;
  coverImage: string;
  onClose?: () => void;
}

export const FlipBook: React.FC<FlipBookProps> = ({
  pages,
  title,
  author,
  coverImage,
  onClose
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Automatically open when rendered
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const totalPages = pages.length;

  const flipPage = (direction: 'next' | 'prev') => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    
    if (direction === 'next' && currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
    
    setTimeout(() => setIsFlipping(false), 500);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const resetBook = () => {
    setCurrentPage(0);
    setIsAutoPlay(false);
  };

  useEffect(() => {
    if (isAutoPlay && currentPage < totalPages - 1) {
      autoPlayRef.current = setTimeout(() => {
        flipPage('next');
      }, 3000);
    } else if (isAutoPlay && currentPage === totalPages - 1) {
      setIsAutoPlay(false);
    }

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, currentPage, totalPages]);

  const openBook = () => {
    setIsOpen(true);
    setCurrentPage(0);
  };

  const closeBook = () => {
    setIsOpen(false);
    resetBook();
    onClose?.();
  };

  // Remove the card view - FlipBook should only show when opened
  if (!isOpen) {
    return null;
  }

  const currentPageData = pages[currentPage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-sm opacity-90">by {author}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={closeBook} className="text-white hover:bg-white/20">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Book Content */}
        <div className="relative h-full pt-16">
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full max-w-2xl h-[calc(100%-120px)] bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg shadow-lg overflow-hidden">
              {/* Page Content */}
              <div className="absolute inset-0 p-8">
                {currentPageData?.image ? (
                  <div className="h-full flex items-center justify-center">
                    <img 
                      src={currentPageData.image} 
                      alt={`Page ${currentPage + 1}`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        console.error('Image failed to load:', currentPageData.image);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className="h-full flex flex-col justify-center">
                    <div className="text-center mb-4">
                      <span className="text-sm text-gray-500">Page {currentPage + 1} of {totalPages}</span>
                    </div>
                    <div className="text-lg leading-relaxed text-gray-800">
                      {currentPageData?.content || 'No content available for this page.'}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Page Number */}
              <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                {currentPage + 1} / {totalPages}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => flipPage('prev')}
              disabled={currentPage === 0 || isFlipping}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoPlay}
              className="rounded-full w-10 h-10 p-0"
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={resetBook}
              className="rounded-full w-10 h-10 p-0"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => flipPage('next')}
              disabled={currentPage === totalPages - 1 || isFlipping}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Page Turn Animation Overlay */}
        {isFlipping && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}; 