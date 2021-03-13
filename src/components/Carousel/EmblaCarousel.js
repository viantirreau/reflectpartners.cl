import React, { useState, useEffect, useCallback } from "react"
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons"
import { useEmblaCarousel } from "embla-carousel/react"
import { useRecursiveTimeout } from "./useRecursiveTimeout"
import "./css/embla.css"

const EmblaCarousel = ({ delayLength, children }) => {
  const [viewportRef, embla] = useEmblaCarousel()
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const autoplay = useCallback(() => {
    if (!embla) return
    if (embla.canScrollNext()) {
      embla.scrollNext()
    } else {
      embla.scrollTo(0)
    }
  }, [embla])

  const { play, stop } = useRecursiveTimeout(autoplay, delayLength)

  const scrollNext = useCallback(() => {
    if (!embla) return
    embla.scrollNext()
    stop()
  }, [embla, stop])

  const scrollPrev = useCallback(() => {
    if (!embla) return
    embla.scrollPrev()
    stop()
  }, [embla, stop])

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla,
  ])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
    embla.on("pointerDown", stop)
  }, [embla, setScrollSnaps, onSelect, stop])

  useEffect(() => {
    play()
  }, [play])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {children.map((child, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">{child}</div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => {
              scrollTo(index)
              stop()
            }}
          />
        ))}
      </div>
    </>
  )
}

export default EmblaCarousel
