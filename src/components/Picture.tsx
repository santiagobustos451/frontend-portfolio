function Picture({ src, className }: { src: string; className: string }) {
  return <img className={className} src={src} alt="" />;
}

export default Picture;
