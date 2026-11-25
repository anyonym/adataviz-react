function InputRecherche({recherche, setRecherche}) {
   
    return(
        <div className="recherche-places"> 
        <label htmlFor="recherche">Rechercher par nombre de places</label>
        <input
          id="recherche"
          type="search"
          placeholder="Ex. : 12"
          autoComplete="off"
          value={recherche}
          onChange={(event) => setRecherche(event.target.value)}
        />
        </div>
    );
}

export default InputRecherche