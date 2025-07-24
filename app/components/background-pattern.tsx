export default function BackgroundPattern() {
  return (
    <>
      {/* Top-right decorative element */}
      <div className="absolute top-0 right-0 -z-10 transform translate-x-1/4 -translate-y-1/4">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl" />
      </div>

      {/* Left middle decorative element */}
      <div className="absolute top-1/3 left-0 -z-10 transform -translate-x-1/2">
        <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-secondary/20 to-secondary/5 blur-3xl" />
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 -z-10 transform -translate-x-1/2 translate-y-1/4">
        <div className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Curved path decorative element */}
      <div className="absolute right-0 top-1/2 -z-10 transform translate-x-1/3 -translate-y-1/2 opacity-30 dark:opacity-20">
        <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,50 Q25,0 50,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <path
            d="M0,60 Q25,10 50,60 T100,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <path
            d="M0,70 Q25,20 50,70 T100,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <path
            d="M0,80 Q25,30 50,80 T100,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <path
            d="M0,90 Q25,40 50,90 T100,90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
        </svg>
      </div>

      {/* Dots pattern */}
      <div className="absolute left-0 bottom-0 -z-10 transform -translate-x-1/4 translate-y-1/4 opacity-30 dark:opacity-20">
        <svg width="300" height="300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 10 }).map((_, rowIndex) =>
            Array.from({ length: 10 }).map((_, colIndex) => (
              <circle
                key={`${rowIndex}-${colIndex}`}
                cx={rowIndex * 10 + 5}
                cy={colIndex * 10 + 5}
                r="0.5"
                className="fill-primary"
              />
            )),
          )}
        </svg>
      </div>
    </>
  )
}
