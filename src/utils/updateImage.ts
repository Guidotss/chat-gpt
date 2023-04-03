export const updateImage = async(file: File) => {

    const formData = new FormData();
    formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET as string);
    formData.append('file', file);

    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL || '', {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}