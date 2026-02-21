import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-white">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <span className="font-serif text-2xl">Memory Lane</span>
        </div>
        
        <div className="space-y-2">
          <p className="text-lg font-light">
            Crafted by love <span className="text-white font-medium">Shubham</span>
          </p>
          <p className="text-sm opacity-60">
            Will improve in coming days
          </p>
        </div>

        <div className="pt-8 border-t border-stone-800 text-xs tracking-widest uppercase opacity-40">
          © {new Date().getFullYear()} Memory Lane. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
