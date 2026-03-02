const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Rishabh Suri. All rights reserved.</p>
        <p className="font-heading text-xs tracking-wider uppercase">
          Built with passion for data
        </p>
      </div>
    </footer>
  );
};

export default Footer;
