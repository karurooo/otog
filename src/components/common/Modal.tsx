import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

/** Native <dialog>: gives focus trapping, Esc to close and a backdrop for free. */
export function Modal({ open, title, onClose, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-label={title}
      className="m-auto w-[min(48rem,calc(100%-2rem))] rounded-xl p-0 backdrop:bg-black/60"
    >
      <div className="flex items-start justify-between gap-4 border-b p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button type="button" onClick={onClose} aria-label="Close" className="rounded p-1 hover:bg-slate-100">
          <X aria-hidden className="size-5" />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </dialog>
  )
}
