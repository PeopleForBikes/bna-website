'use server';


type ActionState = { success: boolean; errors: any; data: any };

async function searchAction(state: ActionState, formData: FormData) {
  const term = formData.get('term');
  console.log('search for:', term);

  return { success: true };
//   revalidatePath('/');
//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
}


export default searchAction;
