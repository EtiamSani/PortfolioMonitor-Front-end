"use server";
import { revalidatePath } from "next/cache";

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
      revalidatePath("/dashboard");
      console.log("cest suppp");
    } else {
      throw new Error("Erreur lors de la suppression de l'entreprise");
    }
  } catch (error) {
    console.error(error);
    // Gérer les erreurs ou afficher un message à l'utilisateur
  }
}

export async function updateCompany(companyId: any, formData: any) {
  const formattedData = {
    ...formData,
    numberOfStocks: parseInt(formData.numberOfStocks, 10),
    pru: parseInt(formData.pru, 10),
  };

  try {
    const response = await fetch(
      `http://localhost:3001/company/update-company/${companyId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      }
    );

    if (response.ok) {
      // Actualiser l'affichage après suppression de l'entreprise
      // onDeleteCompany(companyId);
      revalidatePath("/dashboard");
      console.log("cest suppp");
    } else {
      throw new Error("Erreur lors de la suppression de l'entreprise");
    }
  } catch (error) {
    console.error(error);
    // Gérer les erreurs ou afficher un message à l'utilisateur
  }
}

export async function addCompany(portfolioId: any, formData: any) {
  const formattedData = {
    ...formData,
    numberOfStocks: parseInt(formData.numberOfStocks, 10),
    pru: parseInt(formData.pru, 10),
  };
  try {
    const response = await fetch(
      `http://localhost:3001/company/${portfolioId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Ajoutez d'autres en-têtes si nécessaire
        },
        cache: "no-store",
        body: JSON.stringify(formattedData),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    revalidatePath("/dashboard");
    revalidatePath("/my-portfolio");
    const data = await response.json();
    console.log("Company added:", data);
    //   setSuccessMessage(true);
    setTimeout(() => {
      // setSuccessMessage(false);
    }, 4000);
  } catch (error) {
    console.error("Error adding company:", error);
  }
}
