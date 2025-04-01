const Categories = () => {
    const Categories = [{
        id : 1,
        Title : "Buketler",
        Description : "Gul buketleri",
        Products : [{

        }]
    }];

      const [sellers, setSellers] = useState(initialSellers);
      const { isOpen, openModal, closeModal } = useModal();
      const [selectedSeller, setSelectedSeller] = useState(null);
}