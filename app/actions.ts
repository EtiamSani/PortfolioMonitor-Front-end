"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteCompany(companyId: any) {
  try {
    console.log("Trying to delete company with ID:", companyId);
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
      revalidatePath("/dashboard");
      console.log("cest suppp");
    } else {
      throw new Error("Erreur lors de la suppression de l'entreprise");
    }
  } catch (error) {
    console.error(error);
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
      revalidatePath("/dashboard");
      console.log("cest suppp");
    } else {
      throw new Error("Erreur lors de la suppression de l'entreprise");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function addCompany(portfolioId: any, formData: any) {
  console.log(formData);
  const formattedData = {
    ...formData,
    numberOfStocks: parseInt(formData.numberOfStocks, 10),
    pru: parseInt(formData.pru, 10),
  };
  console.log(formattedData);
  try {
    const response = await fetch(
      `http://localhost:3001/company/${portfolioId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

    setTimeout(() => {}, 4000);
  } catch (error) {
    console.error("Error adding company:", error);
  }
}

export async function addNewShareToCompany(companyId: any, formData: any) {
  console.log(companyId, 'id dans action')
  
  // Vérification des champs numériques avant la conversion en entiers
  const isNumeric = (value: any) => !isNaN(value) && isFinite(value);

  const formattedData = {
    ...formData,
    numberOfStocks: isNumeric(formData.numberOfStocks)
      ? parseFloat(formData.numberOfStocks.replace(',', '.'))
      : null,
    newPru: isNumeric(formData.newPru)
      ? parseFloat(formData.newPru.replace(',', '.'))
      : null,
    priceOfShare: isNumeric(formData.priceOfShare)
      ? parseFloat(formData.priceOfShare.replace(',', '.'))
      : null,
  };

  console.log(formattedData, 'foooooooooorùated')

  try {
    const response = await fetch(`http://localhost:3001/buy-company/${companyId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      throw new Error("Failed to add new shares"); 
    }

    revalidatePath("/dashboard");
    revalidatePath("/my-portfolio");

  } catch (error) {
    console.error("Erreur lors de l'ajout des parts :", error);
    if (error instanceof Error) {
      console.error("Détails de l'erreur :", error.message);
      console.error("Détails supplémentaires :", error.stack);
    }
  }
}

export async function fetchPortfolioById(portfolioId: any) {

  try {
    const response = await fetch(
      `http://localhost:3001/portfolio/get-portfolio/${portfolioId}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    // revalidatePath("/dashboard");
    
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchPortfolioNames() {
  const cookieStore = cookies();
  const cookieInformation = cookieStore.get("ownerId");
  const ownerId = cookieInformation.value;

  try {
    const response = await fetch(`http://localhost:3001/portfolio/${ownerId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    revalidatePath("/dashboard");
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


export async function updatePortfolioData(portfolioId: any, formData: any) {

  const isNumeric = (value: any) => !isNaN(value) && isFinite(value);

  const formattedData = {
    ...formData,
    moneyInput: isNumeric(formData.moneyInput)
      ? parseFloat(formData.moneyInput.replace(',', '.'))
      : null,
  };


  try {
    const response = await fetch(`http://localhost:3001/portfolio/update/${portfolioId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      throw new Error("Failed to add new shares"); 
    }

    revalidatePath("/dashboard");
    revalidatePath("/my-portfolio");

  } catch (error) {
    console.error("Erreur lors de l'ajout des parts :", error);
    if (error instanceof Error) {
      console.error("Détails de l'erreur :", error.message);
      console.error("Détails supplémentaires :", error.stack);
    }
  }
}

export async function removeShareFromCompany(companyId: any, formData: any) {

  
  // Vérification des champs numériques avant la conversion en entiers
  const isNumeric = (value: any) => !isNaN(value) && isFinite(value);

  const formattedData = {
    ...formData,
    numberOfStocks: isNumeric(formData.numberOfStocks)
      ? parseFloat(formData.numberOfStocks.replace(',', '.'))
      : null,
    priceOfShare: isNumeric(formData.priceOfShare)
      ? parseFloat(formData.priceOfShare.replace(',', '.'))
      : null,
  };


  try {
    const response = await fetch(`http://localhost:3001/sell-company/${companyId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      throw new Error("Failed to remove new shares"); 
    }

    revalidatePath("/dashboard");
    revalidatePath("/my-portfolio");

  } catch (error) {
    console.error("Erreur lors de enlevement des parts :", error);
    if (error instanceof Error) {
      console.error("Détails de l'erreur :", error.message);
      console.error("Détails supplémentaires :", error.stack);
    }
  }
}