"use server"
import { revalidatePath } from "next/cache"

export async function deleteCompany(companyId: any) {

    try {
        console.log("Trying to delete company with ID:", companyId);
        // Envoie de la requête DELETE à l'API
        const response = await fetch(
          `http://localhost:3001/company/delete-company/${companyId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.ok) {
          // Actualiser l'affichage après suppression de l'entreprise
          // onDeleteCompany(companyId);
          revalidatePath('/dashboard')
          console.log("cest suppp");
        } else {
          throw new Error("Erreur lors de la suppression de l'entreprise");
        }
      } catch (error) {
        console.error(error);
        // Gérer les erreurs ou afficher un message à l'utilisateur
      }
    

    
}