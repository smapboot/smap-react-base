import { getStorage, ref, uploadBytes, updateMetadata, getDownloadURL, deleteObject } from "firebase/storage";
const storage = getStorage();

export const uploadFileToCloudStorage = async (file, metadades) => {
  let item = {data: null, error: null}
  let data = {}
  let error = {}
  let countErrors = 0;
  if (file instanceof File) {
    let gsReference = `gs://${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/${file.name}`
    const storageRef = ref(storage, gsReference);
    data['gsReference'] = gsReference
    await uploadBytes(storageRef, file)
      .then(async (snapshot) => {
        // utils.console.log("CloudStorage > uploadFilesToCloudStorage > uploadBytes", {file, snapshot})
        data['name'] = snapshot.metadata.name
        data['type'] = snapshot.metadata.contentType
        data['size'] = snapshot.metadata.size
        data['created_at'] = snapshot.metadata.timeCreated
        data['updated_at'] = snapshot.metadata.updated
        data['fullpath'] = snapshot.metadata.fullPath
        await updateMetadata(storageRef, metadades)
          .then(async(metadata) => {
            // utils.console.log("CloudStorage > uploadFilesToCloudStorage > updateMetadata", {file, metadata})
            data['entity'] = metadata.customMetadata.entity
            data['rel'] = metadata.customMetadata.rel
            await getDownloadURL(storageRef)
              .then((url) => {
                // utils.console.log("CloudStorage > getDownloadURL > url", url)
                data['url'] = url
              })
              .catch((err) => {
                deleteFileOfCloudStorage(gsReference)
                error['getDownloadURL'] = err.toString()
                countErrors++
              });
          }).catch((err) => {
            deleteFileOfCloudStorage(gsReference)
            error['uploadMetadataFileError'] = err.toString()
            countErrors++
        });
      }).catch((err) => {
        error['uploadFileError'] = err.toString()
        countErrors++
      });
  }
  item["metadata"] = data
  item["message"] = ( countErrors === 0 )
    ? "El fitxer s'ha pujat amb èxit al CloudStorage i s'han generat les seves metadades correctament"
    : error
  item['status'] = ( countErrors === 0 ) ? 200 : 500
  // utils.console.log("CloudStorage > push item", item)
  return item;
}

export const deleteFileOfCloudStorage = async (gsReference) => {
  const storageRef = ref(storage, gsReference);
  let response
  await deleteObject(storageRef)
    .then((xhr) => {
      response = {
        status: 200,
        message: "El fitxer amb referència " + gsReference + " s'ha eliminat amb èxit del Cloud Storage"
      }
    })
    .catch((err) => {
      response = {
        status: 500,
        message: err.toString()
      }
    });
  return response;
}
