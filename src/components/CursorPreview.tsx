export function CursorPreview({ src, x, y, visible }: { src: string; x: number; y: number; visible: boolean }) {
  return <div className={`hidden lg:block fixed z-40 pointer-events-none w-56 aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ease-out shadow-2xl shadow-black/50 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ left: x, top: y }}><img src={src || 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a8c8373-65d1-4f01-9bba-53b5eab2b1ad_3840w.png'} alt="" className="w-full h-full object-cover" /></div>
}
