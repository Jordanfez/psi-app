import React, { useState } from 'react';
import './profil.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from 'react-bootstrap';
import Box from '@mui/material/Box';

function Profil() {
    const [content, setContent] = useState('')

    const handleChange = (value) => {
        setContent(value);
    };
    /** ajout d'onglet */
    const [inputs, setInputs] = useState(['']); // Tableau initial avec un champ de saisie vide

    const handleAddInput = () => {
      setInputs([...inputs, '']); // Ajoute un champ de saisie vide à la fin du tableau
    };
  
    const handleRemoveInput = (index) => {
      const updatedInputs = [...inputs];
      updatedInputs.splice(index, 1); // Supprime l'élément du tableau à l'index donné
      setInputs(updatedInputs);
    };
  
    const handleInputChange = (index, value) => {
      const updatedInputs = [...inputs];
      updatedInputs[index] = value;
      setInputs(updatedInputs);
    };

    /** aujout des indentifiant telephonique */
    const [selectedCountry, setSelectedCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const countryCodes = [
      { country: 'Afghanistan', code: '+93' },
      { country: 'Algérie', code: '+213' },
      { country: 'Angola', code: '+244' },
      // Ajoutez les autres pays africains avec leurs codes téléphoniques ici
    ];
  
    const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
    };
  
    const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
    };

    /** progress bar here  */

    const [activeTab, setActiveTab] = useState(1);
    const [progress, setProgress] = useState(0);
  
    const handleNextClick = () => {
      if (activeTab < 5) {
        setActiveTab(activeTab + 1);
        setProgress((activeTab + 1) * 20);
      }
    };

  return (
    <div className="wrapper">
      <header>
      <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
      </header>
      <input type="radio" name="slider" defaultChecked id="home" />
      <input type="radio" name="slider" id="blog" />
      <input type="radio" name="slider" id="code" />
      <input type="radio" name="slider" id="help" />
      <input type="radio" name="slider" id="about" />
      <nav>
        <label htmlFor="home" className="home">Entreprise</label>
        <label htmlFor="blog" className="blog">Fondation</label>
        <label htmlFor="code" className="code">Réseaux</label>
        <label htmlFor="help" className="help">Conctact</label>
        <label htmlFor="about" className="about">About</label>
        <div className="slider"></div>
      </nav>
      <section className='container-fluid'>
        {/** onglet numero 1 */}
        <br/>
        <div className="content content-1">
          <div className="title">
          <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
            <Button>Importer imager</Button>
          </Box>&nbsp;&nbsp;&nbsp;&nbsp;
          <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
            <Button>Importer imager ou deposer vos fichier ici</Button>
          </Box>
          </div>
          <br/>
          <hr/>
          <div className="form-group">
            <label className="form-label">
                Nom de l'entreprise
            </label>
            <input type="email" class="form-control" placeholder="Entrer le nom de l'entreprise" /> <br/>

            <label className="form-label">
                À Propos
            </label>
            <div>
                <ReactQuill value={content} onChange={handleChange} placeholder='Faites connaître votre entreprise. Faites savoir au candidat qui vous êtes ...' />
            </div>
            <br/>
            <div>
                <Button  htmlFor="blog" className='btn btn-primary tab-buttons blog' onClick={handleNextClick} disabled={activeTab === 5}>Suivant</Button>
            </div>
          </div>
        </div>
        {/** onglet numero 2 */}
        <div className="content content-2"><br/><br/>
          <div className="container">
          <div className="row">
            <div className="col">
            <label className="form-label" style={{opacity: "75%"}}>
                Type d’Organisation
            </label>
            <select className="form-select">
                <option value="">Select 1</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            </div>
            <div className="col">
            <label className="form-label" style={{opacity: "75%"}}>
                Type d’Industrie
            </label>
            <select className="form-select">
                <option value="">Select 2</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            </div>
            <div className="col">
            <label className="form-label" style={{opacity: "75%"}}>
                Taille Des Equipes
            </label>
            <select className="form-select">
                <option value="">Select 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            </div>
          </div>
        </div><br/>
        {/** select option group 2 */}
        <div className="container">
            <div className="row">
                <div className="col">
                    <label className="form-label" style={{opacity: "75%"}}>
                        Date De Création
                    </label>
                    <select className="form-select">
                        <option value="">Select 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="col">
                    <label className="form-label" style={{opacity: "75%"}}>
                        Site Web
                    </label>
                    <select className="form-select">
                        <option value="">Select 2</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div><br />
            <label className="form-label" style={{opacity: "75%"}}>Vision de l’entreprise</label>
            <div>
                <ReactQuill value={content} onChange={handleChange} placeholder='Faites connaître votre entreprise. Faites savoir au candidat qui vous êtes ...' />
            </div><br />
            <Button className='col btn btn-secondary'>Precedent</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='col tab-buttons' onClick={handleNextClick} disabled={activeTab === 5} style={{marginTop:"0%"}}>Suivant</Button>
        </div>
        </div>
        {/** onglet numero 3 */}
        <div className="content content-3">
            <div className="container" style={{ marginLeft:"2%"}}>
            <br /><br />
                {inputs.map((input, index) => (
                    <div key={index}>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">https://example.com</span>
                        </div>
                        <input
                                value={input}
                                className='input-group-text'
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                placeholder='entrer une adresse'
                                style={{width: "60%"}}
                        />
                        <Button className='btn btn-danger' onClick={() => handleRemoveInput(index)}>X</Button>
                      </div>
                    </div>
                ))}
                <Button className='btn btn-light btn-sm' onClick={handleAddInput} style={{width: "95%"}}>+Ajouter</Button>
                <br /><br />
                <Button className='col btn btn-secondary'>Precedent</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='col tab-buttons' onClick={handleNextClick} disabled={activeTab === 5} style={{marginTop:"0%"}}>Suivant</Button>
            </div>
        </div>
        {/** onglet numero 4 */}
        <div className="content content-4">
            <br/><br />
        <div className="form-group">
            <label className="form-label">
                Nom de l'entreprise
            </label>
            <input type="email" class="form-control" placeholder="Entrer le nom de l'entreprise" /> <br/>

            <label className="form-label">
                Numero
            </label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                        <select class="input-group-text" id="basic-addon3" value={selectedCountry} onChange={handleCountryChange}>
                        <option value="">Sélectionnez un pays</option>
                        {countryCodes.map((country, index) => (
                        <option key={index} value={country.code}>
                            {country.code}
                        </option>
                        ))}
                    </select>
                </div>
                <input
                    class="form-control"
                    type="number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Numéro de téléphone"
                />
            </div>

            <label className="form-label">
                Email
            </label>
            <input type="email" class="form-control" placeholder="Entrer votre mail" /> <br/>

            <div>
                <Button className='col btn btn-secondary'>Precedent</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='col tab-buttons' onClick={handleNextClick} disabled={activeTab === 5} style={{marginTop:"0%"}}>Suivant</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profil;