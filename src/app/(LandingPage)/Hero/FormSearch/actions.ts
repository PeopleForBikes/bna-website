'use server';


async function searchAction(prevState, formData: FormData) {
  const term = formData.get('term');
  console.log('search for:', term);

  return { success: true };
//   revalidatePath('/');
//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
}


export default searchAction;
