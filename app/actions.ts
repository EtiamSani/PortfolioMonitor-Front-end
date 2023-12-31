"use server";
import { revalidatePath, revalidateTag } from "next/cache";
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
    numberOfStocks: parseFloat(formData.numberOfStocks.replace(',','.')),
    pru: parseFloat(formData.pru.replace(',','.')),
    annualDividends: parseFloat(formData.annualDividends.replace(',','.'))
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
  if(cookieStore){
    
    const cookieInformation = cookieStore.get("ownerId");
    if(cookieInformation){

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


export async function fetchPortfolioValue(portfolioId:any) {

  try {
    const response = await fetch(`http://localhost:3001/portfolio/get-portfolio/market-value/${portfolioId}`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      }});
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchPortfolioTotalGainOrLost(portfolioId:any) {

  try {
    const response = await fetch(`http://localhost:3001/portfolio/get-portfolio/total-gain-or-lost/${portfolioId}`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      }});
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchBoughtShares() {

  try {
    const response = await fetch(`http://localhost:3001/shares-transactions/buy`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }});
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json()
    // revalidatePath("/dashboard");
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchSoldShares() {

  try {
    const response = await fetch(`http://localhost:3001/shares-transactions/sell`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }});
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json()
    // revalidatePath("/dashboard");
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function updateDividendsReceived(companyId: any, formData: any) {
  const isNumeric = (value: any) => !isNaN(value) && isFinite(value);

  const formattedData = {
    ...formData,
    dividendsReceived: isNumeric(formData.dividendsReceived)
      ? parseFloat(formData.dividendsReceived.replace(',', '.'))
      : null
  };

  try {
    const response = await fetch(
      `http://localhost:3001/company/update-company/dividends/${companyId}`,
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
    } else {
      throw new Error("Erreur lors de la suppression de l'entreprise");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function postAnalysis(formData: any) {
  const cookieStore = cookies();
  const cookieInformation = cookieStore.get("ownerId");
  if(cookieInformation) {
    const ownerId = cookieInformation.value;

  try {
    const response = await fetch(
      `http://localhost:3001/owner-analysis/upload/${ownerId}`,
      {
        method: "POST",
        headers: {
          
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    revalidatePath("/analysis");
    const data = await response.json();
   
    
  
  } catch (error) {
    console.error("Error adding pdf:", error);
  }
}
}

export async function getTotalAnalysisCount() {

  try {
    const response = await fetch(`http://localhost:3001/owner-analysis/all-pdfs-total`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      }});
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json()
   
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchAllAnalysis(page = 1, pageSize = 6) {
  try {
    const parsedPageSize = parseInt(pageSize.toString(), 10);
    const response = await fetch(`http://localhost:3001/owner-analysis/all-pdfs?page=${page}&pageSize=${parsedPageSize}`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function updateAnalysisData(analysisId: any, formData: any) {
  const isNumeric = (value: any) => !isNaN(value) && isFinite(value);

  const formattedData = {
    ...formData,
    fairValue: isNumeric(formData.fairValue)
      ? parseFloat(formData.fairValue.replace(',', '.'))
      : null,
      entryPoint: isNumeric(formData.entryPoint)
      ? parseFloat(formData.entryPoint.replace(',', '.'))
      : null,
  };

  try {
    const response = await fetch(
      `http://localhost:3001/owner-analysis/analysis-data/${analysisId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      }
    );

    revalidatePath("/analysis");
    if (response.ok) {
    } else {
      throw new Error("Erreur lors de la suppression de l'entreprise");
    }
  } catch (error) {
    console.error(error);
  }
}
