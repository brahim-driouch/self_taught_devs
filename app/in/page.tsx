import { auth } from "@/auth";



export default async function Protected() {
 const session = await auth()
 const hasAccess = !!session
 const user = session?.user
  console.log(user)
  return hasAccess ? (
    <div>
       {JSON.stringify(user)}

    </div>
  ) : (
    <div>
      This page is protected, please <>Login</> to view it
    </div>
  );
}