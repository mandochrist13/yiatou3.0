import { useState } from "react";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

export default function Informations() {
  const [userData, setUserData] = useState({
    personal: {
      civility: "Monsieur",
      firstName: "Dave",
      lastName: "Anguilet",
      email: "abcdef@gmail.com",
      phone: "066038083",
      status: "Employé",
      birthDate: "18/02/1998"
    },
    address: {
      city: "Libreville",
      address1: "Beausejour,En face de chez...",
      occasionalAddress: "Beausejour,En face de chez..."
    },
    payment: {
      airtelMoney: "074567765",
      fullName: "Anguilet prenom"
    },
    password: {
      current: "*****************"
    }
  });

  const [editSections, setEditSections] = useState({
    personal: false,
    address: false,
    payment: false,
    password: false
  });

  const handleEdit = (section) => {
    setEditSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSave = async (section, newData) => {
    try {
      setUserData(prev => ({
        ...prev,
        [section]: newData
      }));
      
      handleEdit(section);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  const isAnyEditing = Object.values(editSections).some(value => value);

  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Mes informations"/>}>
      <div className="px-3 py-4 flex flex-col gap-8 bg-white mt-8">
        <div className={`border-b-2 border-gray-300 pb-5 mt-2 ${isAnyEditing && !editSections.personal ? 'hidden' : ''}`}>
          <H2>Informations personnelles</H2>
          <Section onEdit={() => handleEdit('personal')} isEditing={editSections.personal}>
            {!editSections.personal ? (
              <>
                <Item>Monsieur</Item>
                <Item title="Prenom">{userData.personal.firstName}</Item>
                <Item title="Noms">{userData.personal.lastName}</Item>
                <Item title="Adresse email">{userData.personal.email}</Item>
                <Item title="Numero de telephone">{userData.personal.phone}</Item>
                <Item title="Statut">{userData.personal.status}</Item>
                <Item title="Date de naissance">{userData.personal.birthDate}</Item>
              </>
            ) : (
              <EditForm
                initialData={userData.personal}
                fields={[
                  { name: "civility", label: "Civilité", type: "select", options: ["Monsieur", "Madame"] },
                  { name: "firstName", label: "Prenom", type: "text" },
                  { name: "lastName", label: "Noms", type: "text" },
                  { name: "email", label: "Adresse email", type: "email" },
                  { name: "phone", label: "Numero de telephone", type: "tel" },
                  { name: "status", label: "Statut", type: "text" },
                  { name: "birthDate", label: "Date de naissance", type: "text" }
                ]}
                onSave={(data) => handleSave('personal', data)}
                onCancel={() => handleEdit('personal')}
              />
            )}
          </Section>
        </div>
        <div className={`border-b-2 border-gray-300 pb-5 ${isAnyEditing && !editSections.address ? 'hidden' : ''}`}>
          <H2>Adresses de livraison</H2>
          <Section onEdit={() => handleEdit('address')} isEditing={editSections.address}>
            {!editSections.address ? (
              <>
                <Item title="Villes">{userData.address.city}</Item>
                <Item title="Adresse de livraison 1">{userData.address.address1}</Item>
                <Item title="Adresse de livraison occasionnelle">{userData.address.occasionalAddress}</Item>
              </>
            ) : (
              <EditForm
                initialData={userData.address}
                fields={[
                  { name: "city", label: "Villes", type: "text" },
                  { name: "address1", label: "Adresse de livraison 1", type: "text" },
                  { name: "occasionalAddress", label: "Adresse de livraison occasionnelle", type: "text" }
                ]}
                onSave={(data) => handleSave('address', data)}
                onCancel={() => handleEdit('address')}
              />
            )}
          </Section>
        </div>
        <div className={`border-b-2 border-gray-300 pb-5 ${isAnyEditing && !editSections.payment ? 'hidden' : ''}`}>
          <H2>Coodonnées de paiement</H2>
          <Section onEdit={() => handleEdit('payment')} isEditing={editSections.payment}>
            {!editSections.payment ? (
              <>
                <Item title="N Airtel Money">{userData.payment.airtelMoney}</Item>
                <Item title="Nom complet relié au compte">{userData.payment.fullName}</Item>
              </>
            ) : (
              <EditForm
                initialData={userData.payment}
                fields={[
                  { name: "airtelMoney", label: "N Airtel Money", type: "tel" },
                  { name: "fullName", label: "Nom complet relié au compte", type: "text" }
                ]}
                onSave={(data) => handleSave('payment', data)}
                onCancel={() => handleEdit('payment')}
              />
            )}
          </Section>
        </div>
        <div className={`pb-5 ${isAnyEditing && !editSections.password ? 'hidden' : ''}`}>
          <H2>Mon mot de passe</H2>
          <Section onEdit={() => handleEdit('password')} isEditing={editSections.password}>
            {!editSections.password ? (
              <>
                <Item title="Mot de passe actuelle">{userData.password.current}</Item>
              </>
            ) : (
              <EditForm
                initialData={userData.password}
                fields={[
                  { name: "current", label: "Mot de passe actuelle", type: "password" }
                ]}
                onSave={(data) => handleSave('password', data)}
                onCancel={() => handleEdit('password')}
              />
            )}
          </Section>
        </div>
      </div>
    </PageLayout>
  );
}

const EditForm = ({ fields, initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const validateDateFormat = (date) => {
    // Regex pour valider le format JJ/MM/AAAA
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(date)) return false;

    // Vérifier si la date est valide
    const [day, month, year] = date.split('/').map(Number);
    const dateObj = new Date(year, month - 1, day);
    return dateObj.getDate() === day &&
           dateObj.getMonth() === month - 1 &&
           dateObj.getFullYear() === year;
  };

  const handleChange = (name, value) => {
    setErrors(prev => ({ ...prev, [name]: '' }));

    if (name === 'birthDate') {
      // Permettre la saisie uniquement des chiffres et du slash
      const sanitizedValue = value.replace(/[^\d/]/g, '');
      
      // Ajouter automatiquement les slashes
      let formattedValue = sanitizedValue;
      if (sanitizedValue.length === 2 && !sanitizedValue.includes('/')) {
        formattedValue = sanitizedValue + '/';
      } else if (sanitizedValue.length === 5 && sanitizedValue.split('/').length === 2) {
        formattedValue = sanitizedValue + '/';
      }
      
      // Limiter la longueur à 10 caractères (JJ/MM/AAAA)
      formattedValue = formattedValue.slice(0, 10);

      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Valider la date de naissance si elle existe dans les champs
    const birthDateField = fields.find(f => f.name === 'birthDate');
    if (birthDateField && formData.birthDate) {
      if (!validateDateFormat(formData.birthDate)) {
        newErrors.birthDate = 'Format invalide. Utilisez JJ/MM/AAAA';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">{field.label}</label>
          {field.type === 'select' ? (
            <select
              className="w-full p-2 border rounded-md"
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            >
              {field.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className={`w-full p-2 border rounded-md ${
                  errors[field.name] ? 'border-red-500' : ''
                }`}
                placeholder={field.name === 'birthDate' ? 'JJ/MM/AAAA' : ''}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-100"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
};

const Section = ({ children, onEdit, isEditing }) => {
  return (
    <div className={`${isEditing ? 'w-full' : 'grid grid-cols-[1fr_30px]'} py-3`}>
      <div className="flex flex-col gap-3">
        {children}
      </div>
      {!isEditing && (
        <div className="flex justify-center items-start flex-col">
          <button 
            onClick={onEdit}
            className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            aria-label="Modifier les informations"
          >
            <i className="fi fi-rr-edit"></i>
          </button>
        </div>
      )}
    </div>
  );
};

const H2 = ({children})=>{
    return (
        <h2 className="font-medium text-lg">{children}</h2>
    );
}
const Item = ({title = "Civilité",children}) => {
    return (
        <div>
            <p className="font-medium text-gray-600 text-[13px]">{title}</p>
            <p className="font-md">{children}</p>
        </div>
    );
}