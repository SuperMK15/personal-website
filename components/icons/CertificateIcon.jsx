const CertificateIcon = (props) => {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.707 7.293a1 1 0 0 1 1.414 0l4.243 4.243 8.485-8.485a1 1 0 1 1 1.414 1.414l-9.9 9.9a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.414z"
            />
        </svg>
    );
};

export default CertificateIcon;
