export default async function ProfilePage({ params }: { params: Promise<{ id: string } >}) {

    const {id} = await params;
    return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 py-2">
      <h1>User Profile</h1>
      <p>This is the user profile page.</p>
      <span className="bg-blue-500  p-2 rounded-md">
        User ID: {id}
      </span>
    </div>
  );
}