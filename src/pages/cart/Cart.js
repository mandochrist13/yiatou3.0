import { useState } from 'react'
import { Trash2, Plus, Minus } from 'lucide-react'
import TopBarWithButtonBack from '../../components/topBar/TopBarWithButtonBack'
import PageLayout from '../layout/PageLayout'
import ButtonCta from "../../components/Buttons/ButtonCta";
import { useNavigate } from 'react-router-dom'

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full" role="dialog" aria-modal="true">
        <h3 className="text-lg font-semibold mb-4">Confirmer la suppression</h3>
        <p className="text-gray-600 mb-6">Êtes-vous sûr de vouloir supprimer cet article du panier ?</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium"
            aria-label="Annuler la suppression"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium"
            aria-label="Confirmer la suppression"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Clé USB 128 GB', price: 15000, quantity: 0, image: '/img/pro/p7.png', selected: false, isEchantillon: true },
    { id: 2, name: 'Clé USB 14 GB', price: 7000, quantity: 0, image: '/img/pro/p8.png', selected: false, isEchantillon: false },
    { id: 3, name: 'Clé USB 4 GB', price: 2500, quantity: 0, image: '/img/pro/p9.png', selected: false, isEchantillon: true },
    { id: 4, name: 'Bouteille de Champagne', price: 2500, quantity: 0, image: '/img/pro/champagne.jpg', selected: false, isEchantillon: true },
  ])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    )
  }

  const handleToggleSelect = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    )
  }

  const handleSelectAll = () => {
    const areAllSelected = cartItems.every(item => item.selected)
    setCartItems(items =>
      items.map(item => ({ ...item, selected: !areAllSelected }))
    )
  }

  // Calcul du total uniquement pour les articles sélectionnés
  const total = cartItems.reduce((sum, item) => 
    item.selected ? sum + item.price * item.quantity : sum, 0
  )

  // Vérifie si tous les articles sont sélectionnés
  const areAllSelected = cartItems.length > 0 && cartItems.every(item => item.selected)
  
  // Nombre d'articles sélectionnés
  const selectedCount = cartItems.filter(item => item.selected).length

  // Vérifie si parmi les articles sélectionnés il y a des échantillons
  const hasSelectedEchantillons = cartItems.some(item => item.selected && item.isEchantillon)

  const handleDeleteClick = (id) => {
    setItemToDelete(id)
    setIsDeleteModalOpen(true)
  }

  const handleConfirmDelete = () => {
    setCartItems(items => items.filter(item => item.id !== itemToDelete))
    setIsDeleteModalOpen(false)
    setItemToDelete(null)
  }

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false)
    setItemToDelete(null)
  }

  const handleCommander = () => {
    navigate('/commandes')
  }

  return (
    <PageLayout
      topBar={
        <TopBarWithButtonBack
          link="/"
          className="bg-white"
          title="Panier"
        />
      }
    >
      <div className="w-full mt-16">
        <div className="px-1 space-y-1">
          <div className="bg-white p-2 flex items-center space-x-2">
            <input 
              type="checkbox" 
              checked={areAllSelected}
              onChange={handleSelectAll}
              className="rounded text-purple-600 focus:ring-purple-500"
              aria-label="Sélectionner tous les articles"
            />
            <span className="text-sm text-gray-600">
              Sélectionner tout ({selectedCount}/{cartItems.length})
            </span>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="relative">
              <div className="bg-white p-2 flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    checked={item.selected}
                    onChange={() => handleToggleSelect(item.id)}
                    className="rounded text-purple-600 focus:ring-purple-500"
                    aria-label={`Sélectionner ${item.name}`}
                  />
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-md"
                    loading="lazy"
                  />
                  <div className="flex-grow">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{item.price.toLocaleString()} FCFA</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <button 
                      onClick={() => handleDeleteClick(item.id)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label={`Supprimer ${item.name} du panier`}
                    >
                      <Trash2 className="w-4 h-4 mb-1" />
                    </button>
                    <div className="flex items-center space-x-1 border border-[#cccccc] rounded-full">
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none"
                        aria-label="Diminuer la quantité"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none"
                        aria-label="Augmenter la quantité"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] bg-gray-200 w-full"></div>
              </div>
            </div>
          ))}
          
          {hasSelectedEchantillons && (
            <div className="fixed bottom-[110px] left-0 right-0 bg-gray-100 p-3 z-10">
              <p className="bg-red-100 text-xs text-[#333333] px-3 text-center">
                Les échantillons sont limités à 3 par commande et seront livrés séparément de vos autres articles
              </p>
            </div>
          )}

        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-20">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="font-semibold text-black">TOTAL</span>
              <span className="text-xs text-gray-600 ml-2">
                ({selectedCount} article{selectedCount > 1 ? 's' : ''} sélectionné{selectedCount > 1 ? 's' : ''})
              </span>
            </div>
            <span className="font-semibold text-black">{total.toLocaleString()} FCFA</span>
          </div>
          <ButtonCta
            className="flex-1 text-lg font-bold"
            disabled={selectedCount === 0}
            onClick={handleCommander}
          >
            Commander 
          </ButtonCta>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </PageLayout>
  )
}

export default Cart
