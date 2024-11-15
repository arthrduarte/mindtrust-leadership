export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Our story</h3>
              <p className="text-gray-400">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Our programs</h3>
              <p className="text-gray-400">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            © Copyright 2024 - All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
} 