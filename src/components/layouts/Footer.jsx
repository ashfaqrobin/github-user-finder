const Footer = () => {
    const footerYear = new Date().getFullYear();

    return (
        <footer className="footer footer-center p-10 text-primary-content bg-gray-700">
            Copyright &copy; {footerYear} | All Rights Reserved
        </footer>
    );
};

export default Footer;
