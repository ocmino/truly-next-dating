import { credential } from "firebase-admin";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

const apps = getApps()

const app = 
  apps.length > 0 
    ? apps [0]
    : initializeApp({
      credential:  cert ({
        projectId: "truly-next-dating",
          clientEmail: "firebase-adminsdk-qyl8t@truly-next-dating.iam.gserviceaccount.com",
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDDWaJu76kcRgnJ\ngyhO2V64l+Vm+woIS2S/6uWwvspzmbkJsSUKYovWYBxxC5r8K7XRGfKmPmdEdMaY\nYBzAtpCamaFTSLhSo7zHIFG9H1ksVrWVRjpr+zRwdm/Q4/sdO4Hyt8KgvHfYqGAB\ngT8ZKKgip5s86Wt+XaatEgBMYBgQZCGLtNpqEPJPWVvdCZssWPEBUpU2SfTzfgtH\nyj0Np1SD3EdPF8OMZ/NkUadsrgMGuAqY3F29rh9S8kAnTM6FleKQRgUKwWVv7enK\nTpZJcxHgTs8M+kuTxkU6sXD+16z+33d5OgcqTHI5aC9CV6YmZ0lg9TtOIvMot/ph\nMI7ixuiJAgMBAAECggEAD4Gkc/41zsbnzPqfxE6F3HeWNUFKb75y/gxKdOgC0FVM\noQPSPGD2glWjvFIfAyhXE4Tl7s33oDFNeFfyFawIOMq8Hw0f2yjLJIVLZ7c+0AGx\nV+rjWqHt7NrB5R4hAeuGKlBC30PGlvNFQlP86xAqnyxDFX0z1AE2vfiL/y6w36Vn\nnDwyyRLC+7pwtJcnKm8KlpgvRIzxCE/HlLng5oOYstrXb66qowMYrU7OTe9PDtHd\nFaar4pplUIc0RllXC5HqRAMKgrD8aReuvOu73oUJSA4/3pCVmwmD/Z2pbos3KyCI\nBv24W3SUWktLdIWms5934X0/TrWoyCoMeFTmwF7fHwKBgQDgHdu6IPxx8WqrXvl1\nAVcbVlI+jo1PzAzovJdLdi92+XGmepKNTEwF/nrXmt2PidRc7T1HHHYpkZvo5Y9Z\nxhLk+I0bgu3/tRxf0eDwTPRQ4Ng59/ciryOQurzjx4MzqmNcmGpe1eCNls4I3mV6\nFSrOYofqaZXe3pF+JT7KNDLfIwKBgQDfJB/Kgb5OjvUwPaMtQABl9DiRaK4XWbYV\ndBrfqOnVh67xPyub4qwDjiryl1jOD6vJ17Fq3T3FVgiKeU8oDNTHJz7P8CCJpCT3\nhhbzQjCRjf/M+C+DsDIxULCEHlce8EIcfigxu4twKSLA627aC4DK1NaJnBcyTNlM\n8vBpMePKYwKBgQCH2BFTZKMfvaFWdp7mGQXfgBch6+4jrB83AvkBuIVUrCYDLtCd\n7N031ORIw4oAcx7RpMs7yzikQaorJNobJEBXoYCGaHoyQGkOe3zIqxx72Y22tWKL\nF3WLSGUt+8S/EExh19DB4wnVSM9h+MuxkBr+NiMEJzO8f1PZDmJc1f7v2QKBgQDa\nj8eT0wFUcTI3zifGaqn5Mv01cBMVTAnNeavY5tojDIOOSRGt3pgd42KtuxCAxVi+\nm0ZsJcgbQembuLaPxAGmEAq2Ib29E8ohqHVST8LCzxN+8JmZozuGkkJTJmSvKSWY\nQvmbvNcXRTOFQxWQ/TNpeI+qufj+i8dMV6ijYPp9gQKBgQCJXx0tBCBfmgoYrBJx\n6TrhzcDwBb+HeUqlWQEs6ck8IdWs/1lvuGSuPtWtd/ZUdu83yN2BDjJ/Pb8KHokh\npvmTjl4DrEomc6ZYwZoHy9DYZNJw1VhYYa0viOLi2DJF7BqLQehG7k+9wf44sx3G\n7HqtELDlG+C2nDNsGOBZrnJoBQ==\n-----END PRIVATE KEY-----\n"
        }),
      })

export const firestore = getFirestore(app)