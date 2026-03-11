
INSERT INTO storage.buckets (id, name, public)
VALUES ('partner-documents', 'partner-documents', false)
ON CONFLICT (id) DO NOTHING;

DO $$ BEGIN
  CREATE POLICY "Authenticated users can upload partner documents"
    ON storage.objects FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'partner-documents' AND (storage.foldername(name))[1] = auth.uid()::text);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can view own partner documents"
    ON storage.objects FOR SELECT
    TO authenticated
    USING (bucket_id = 'partner-documents' AND (storage.foldername(name))[1] = auth.uid()::text);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
