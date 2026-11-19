import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { EmptyState } from '@/components/common/EmptyState'
import { Modal } from '@/components/common/Modal'
import { Section } from '@/components/common/Section'
import { galleryFixture } from '../../data/gallery'

export function GallerySection() {
  const albums = galleryFixture.data
  const [albumIdx, setAlbumIdx] = useState(0)
  const [photoIdx, setPhotoIdx] = useState<number | null>(null)
  const photos = albums[albumIdx]?.photos ?? []
  const current = photoIdx === null ? null : photos[photoIdx]
  const step = (d: number) => setPhotoIdx((i) => (i === null ? i : (i + d + photos.length) % photos.length))

  return (
    <Section id="gallery" eyebrow="Gallery" title="Moments in motion">
      {albums.length === 0 ? (
        <EmptyState title="Albums coming soon" />
      ) : (
        <>
          <div role="group" aria-label="Albums" className="flex flex-wrap gap-2">
            {albums.map((a, i) => (
              <button
                key={a.id}
                type="button"
                aria-pressed={i === albumIdx}
                onClick={() => setAlbumIdx(i)}
                className="aria-pressed:bg-primary rounded-full border px-4 py-1.5 text-sm font-semibold aria-pressed:text-white"
              >
                {a.title} ({a.photos.length})
              </button>
            ))}
          </div>
          <ul className="mt-6 columns-2 gap-4 md:columns-3">
            {photos.map((p, i) => (
              <li key={p.id} className="mb-4 break-inside-avoid">
                <button type="button" onClick={() => setPhotoIdx(i)} className="block w-full">
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    className="h-auto w-full rounded-md"
                  />
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      <Modal open={current != null} title={current?.alt ?? ''} onClose={() => setPhotoIdx(null)}>
        {current && (
          <div
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') step(-1)
              if (e.key === 'ArrowRight') step(1)
            }}
          >
            <img src={current.src} alt={current.alt} className="mx-auto max-h-[70vh] w-auto" />
            <div className="mt-3 flex items-center justify-between">
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="rounded p-2 hover:bg-slate-100">
                <ChevronLeft aria-hidden />
              </button>
              <p className="text-sm text-slate-600" aria-live="polite">
                {(photoIdx ?? 0) + 1} / {photos.length}
              </p>
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className="rounded p-2 hover:bg-slate-100">
                <ChevronRight aria-hidden />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}
