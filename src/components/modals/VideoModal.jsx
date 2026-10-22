import { X, Video, Play } from "lucide-react";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col">
        <div className="flex items-center justify-between p-4 bg-slate-950 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold">
              Tour Institucional • Plantel Bicentenario Tuxtla Gutiérrez
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8fM2fITmTDkOCIkdH8Jlkaj-oRmRm9_5ytjYWa8aZ5knxG0eMUl_vz1VWnLsGrKrEKBC8Ep2ZNmpAnipqNC20InR_T5ZflZV82VLl4PfO_Wo3xZdwxBoI1MMFdFlj4U0quHWMUW7fY3fh0JHY5LnxJOKSZnrwwE7J-geYR9AOYl0MSAxFAAndn00lmr5Kz0K2jDUxex5jjHDFXw8Etei8bhVWSOhB80X5RiBayHXN')",
            }}
          />
          <div className="relative z-10 text-center p-6 max-w-md space-y-4">
            <div className="w-20 h-20 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center mx-auto shadow-2xl animate-pulse">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Recorrido Guiado por el Plantel Bicentenario
            </h4>

            <div className="inline-block px-3 py-1 rounded bg-white/10 text-amber-300 text-[11px] font-mono">
              Video en proceso de producción oficial (Espacio habilitado)
            </div>
          </div>
        </div>
        <div className="p-4 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Duración estimada: 2:45 min</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Cerrar Reproductor
          </button>
        </div>
      </div>
    </div>
  );
}
